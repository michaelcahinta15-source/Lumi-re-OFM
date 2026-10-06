export const pricingConfig = {
  baseSalary: {
    amount: 2000, // TODO: confirm with agency - monthly guaranteed minimum
    description: "Guaranteed baseline income for stability while your account grows"
  },
  bonusStructure: [
    {
      type: "Video",
      rate: 50, // TODO: confirm with agency - per delivered video
      description: "Per delivered video"
    },
    {
      type: "Picture",
      rate: 15, // TODO: confirm with agency - per delivered picture
      description: "Per delivered picture"
    }
  ],
  recoupment: {
    description: "Transparent explanation of how agency recovers upfront investment in your success. All terms are clearly defined in your contract.",
    caps: {
      equipment: 500, // TODO: confirm with agency
      adSpend: 1000, // TODO: confirm with agency
      setupCosts: 300 // TODO: confirm with agency
    }
  }
};
