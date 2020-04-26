import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    // eslint-disable-next-line prettier/prettier
    const reducerFactory = (type: 'income' | 'outcome'): ((acc: Transaction, curr: Transaction) => Transaction) => {
      const reducer = (
        accTransaction: Transaction,
        transaction: Transaction,
      ): Transaction => {
        return new Transaction({
          title: '',
          value:
            accTransaction.value +
            (transaction.type === type ? transaction.value : 0),
          type,
        });
      };

      return reducer;
    };

    const reducerIncome = reducerFactory('income');
    const reducerOutcome = reducerFactory('outcome');

    const { value: income } = this.all().reduce(
      reducerIncome,

      new Transaction({
        title: '',
        value: 0,
        type: 'income',
      }),
    );

    const { value: outcome } = this.all().reduce(
      reducerOutcome,
      new Transaction({
        title: '',
        value: 0,
        type: 'outcome',
      }),
    );

    return { income, outcome, total: income - outcome };
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const { total } = this.getBalance();

    if (type === 'outcome' && total < value) {
      throw Error("Can't create a outcome transaction without enought income");
    }
    const newTransaction = new Transaction({ title, value, type });

    this.transactions.push(newTransaction);

    return newTransaction;
  }
}

export default TransactionsRepository;
