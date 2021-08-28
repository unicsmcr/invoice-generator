import React, { ref } from "react";
import { Button, Box } from "@material-ui/core";
import { PDFExport } from "@progress/kendo-react-pdf";
import "./InvoiceFile.css";

export default function InvoiceFile(props) {
  const pdfExportComponent = React.createRef(null);
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };
  return (
    <>
      <Box display="flex" justifyContent="center" m={2}></Box>
      <PDFExport
        ref={pdfExportComponent}
        fileName={"Invoice " + props.invoiceNumber}
        creator="UniCS"
        title={"UniCS Invoice " + props.eventName + " - " + props.tierName}
      >
        <div className="invoice-box" ref={ref}>
          <table cellPadding="0" cellSpacing="0">
            <tr className="top">
              <td colSpan="4">
                <table>
                  <tr>
                    <td className="title">
                      <img className="img" alt="" src="/logo.png" />
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      Invoice #{props.invoiceNumber}
                      <br />
                      Created: {props.issueDate}
                      <br />
                      Payment Due: {props.paymentDate}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr className="information">
              <td colSpan="4">
                <table>
                  <tr>
                    <td>
                      <b>Invoice From: </b>
                      <br />
                      UniCS
                      <br />
                      University of Manchester Students' Union
                      <br />
                      Oxford Road
                      <br />
                      Manchester
                      <br />
                      M13 9PR
                      <br />
                      <br />
                      <b>Invoice To:</b>
                      <br />
                      {props.companyName}
                      <br />
                      {props.address1}
                      <br />
                      {props.address2 ? (
                        <>
                          {props.address2}
                          <br />
                        </>
                      ) : null}
                      {props.city}, {props.zip}
                      <br />
                      {props.country}
                      <br />
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <b>Payment Details</b>
                      <br />
                      Bank: Santander
                      <br />
                      Account Number: 10299375
                      <br />
                      Sort Code: 09-02-22
                      <br />
                      Reference: RS642
                      <br />
                      IBAN: GB16ABBY09022210299375
                      <br />
                      SWIFT: ABBYGB2LXXX
                      <br />
                      VAT Number: 181987166
                      <br />
                      Company Region: 7759800
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr className="heading">
              <td>Qty</td>
              <td>Item</td>
              <td>Rate (£)</td>
              <td>Price (£)</td>
            </tr>

            <tr className="item">
              <td>1</td>
              <td>
                {props.eventName} - {props.tierName}
              </td>
              <td>{props.value}</td>
              <td>{props.value}</td>
            </tr>

            <tr className="item">
              <td>
                <br />
              </td>
              <td>
                <br />
              </td>
              <td>
                <br />
              </td>
              <td>
                <br />
              </td>
            </tr>
            <tr className="item">
              <td>
                <br />
              </td>
              <td>
                <br />
              </td>
              <td>
                <br />
              </td>
              <td>
                <br />
              </td>
            </tr>
            <tr className="item">
              <td>
                <br />
              </td>
              <td>
                <br />
              </td>
              <td>
                <br />
              </td>
              <td>
                <br />
              </td>
            </tr>
            <tr className="item">
              <td>
                <br />
              </td>
              <td>
                <br />
              </td>
              <td>
                <br />
              </td>
              <td>
                <br />
              </td>
            </tr>
            <tr className="item">
              <td>
                <br />
              </td>
              <td>
                <br />
              </td>
              <td>
                <br />
              </td>
              <td>
                <br />
              </td>
            </tr>

            <tr className="item last"></tr>

            <tr className="total">
              <td></td>
              <td></td>
              <td></td>
              <td>Total: £ {props.value}</td>
            </tr>
          </table>
        </div>
      </PDFExport>
      <Box display="flex" justifyContent="center" m={4}>
        <Button onClick={handleExportWithComponent} variant="contained">
          Download PDF
        </Button>
      </Box>
    </>
  );
}
