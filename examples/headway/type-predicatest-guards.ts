type LineItem = {
    productId: string;
    quantity: number;
    discounted?: boolean;
    unitPrice: number;
}

type FinalInvoice = {
    __typename: "FinalInvoice"
    /* Other fields omitted */
    insertedat: string;
    invoiceNumber: string;
    customerId: number;
    approvedBy: number;
    lineItems: LineItem[];
}

type DraftInvoice = {
    __typename: "DraftInvoice"
    /* Other fields omitted */
    insertedat: string;
    invoiceNumber?: string;
    customerId?: number;
    approvedBy?: number;
    lineItems: LineItem[];
}

type Invoice = FinalInvoice | DraftInvoice;

const isFinalInvoice = (invoice: Invoice): invoice is FinalInvoice => {
    return invoice.__typename === "FinalInvoice";
}

const isDraftInvoice = (invoice: Invoice): invoice is DraftInvoice => {
    return invoice.__typename === "DraftInvoice";
}

const invoice: Invoice = {
    __typename: "DraftInvoice",
    insertedat: "2022-05-01",
    lineItems: []
}

isFinalInvoice(invoice); // false
isDraftInvoice(invoice); // true

export {};