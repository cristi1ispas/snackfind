import { useState } from "react";
import BuyXgetYtemplate from "./BuyXgetYtemplate";
import SimpleDiscountTemplate from "./SimpleDiscountTemplate";

function LoyaltyDiscountTemplate({ discount }) {

  function loyaltyPrograme(){
    return (
      <div className="loyaltyProgramRequirement">
        <md-icon>credit_card_heart</md-icon>
        <b>Discount requires loyalty card!</b>
      </div>
    );
  }

  if (discount.prod_required === null) {
    return (
      <SimpleDiscountTemplate discount={discount}>
        {loyaltyPrograme()}
      </SimpleDiscountTemplate>
    );
  } else {
    return (
      <BuyXgetYtemplate discount={discount}>
        {loyaltyPrograme()}
      </BuyXgetYtemplate>
    );
  }
}

export default LoyaltyDiscountTemplate;