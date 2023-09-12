import React from "react";
import './vouchers.css'
import voucher1 from '../../../assets/voucher1.png'
import voucher2 from '../../../assets/voucher2.png'

const Vouchers = () => {

  return (<div className="vouchers-index">
  <div className="overlap-group-wrapper">
    <div className="overlap-group">
      <p className="text-wrapper">
        You did it!.
      </p>
      <div className="text-wrapper-2">Choose your reward</div>
      <img
            className="voucher1"
            alt="voucher1"
            src={voucher1}
        />
        <img
            className="voucher2"
            alt="voucher2"
            src={voucher2}
        />
    </div>
  </div>
</div>)
};

export default Vouchers;
