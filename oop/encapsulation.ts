class Totalizer {
  private total = 0;
  private taxRateFactor = 0.2;

  addDonation(amoun: number): void {
    if (amoun <= 0) {
      throw new Error('Donation exception');
    }

    const taxrebate = amoun * this.taxRateFactor;
    const totalDonation = amoun + taxrebate;
    this.total += totalDonation;
  }

  getAmountRaised(): number {
    return this.total;
  }
}

const totalizer = new Totalizer();
totalizer.addDonation(10000);
var fundsRaised = totalizer.getAmountRaised();
console.log(fundsRaised);
