
export function _handleError(status) {
    if (status === 404) {
        throw new NotFoundError();
    }

    if (status === 500) {
        throw new ServerError();
    }
}

export function _throwSpecificError(err) {
    if (err instanceof ServerError || err instanceof NotFoundError) {
        throw err;
    }
    throw new NetworkError();
}

export class NetworkError extends Error {
    constructor() {
        super("Network error");
    }
}

export class NotFoundError extends Error {
    constructor() {
        super("The resource you requested was not found.");
    }
}

export class ServerError extends Error {
    constructor() {
        super("There was a server error.");
    }
}