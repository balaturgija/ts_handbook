type DeliminatedDocument = {
    text: string;
    separator: "comma" | "tab";
}

type PlaintextDocument = {
    texts: string;
}

const printDeliminated = (doc: DeliminatedDocument) => {
    /*  */
}

const printPlainText = (doc: PlaintextDocument) => {
    /*  */
}

const printDocument = (doc: DeliminatedDocument | PlaintextDocument) => {
    if("separator" in doc) {
        printDeliminated(doc);
    } else {
        printPlainText(doc);
    }
}

const printDocumentBroken = (doc: DeliminatedDocument | PlaintextDocument) => {
    printPlainText(doc);
}

export {};