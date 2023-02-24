interface Autherror {
    type: 'auth';
    message: {
        code: 100;
        message: string;
    }
}

interface DbError {
    type: 'database';
    shouldEmit: boolean;
    message: {
        code: 101;
        message: string;
    }
}

interface UpdateError {
    type: 'update';
    shouldToast: boolean;
    message: {
        code: 102,
        message: string;
    }
}

type AppError = Autherror | DbError | UpdateError;

const authError: AppError = {
    type: 'auth',
    message: {
        code: 100,
        message: 'Unauthenticated'
    }
};

const dbError: AppError = {
    type: 'database',
    shouldEmit: true,
    message: {
        code: 101,
        message: 'Could not save the item'
    }
}

const updateError: AppError = {
    type: 'update',
    shouldToast: true,
    message: {
        code: 102,
        message: 'Update failed'
    }
}

export {};