import React from "react";
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";
import "mdbreact/dist/css/mdb.css"

const Footer = () => {
  return (
    <MDBFooter color="brown" className="font-small pt-2 lighten-3">
      <MDBContainer fluid className="text-center text-md-left ">
        <MDBRow>
          <MDBCol md="12">
          	<a href="https://bisag.gujarat.gov.in/">
            	<img src="https://bisag.gujarat.gov.in/sites/default/files/logo_5bisang.png" className="img-fluid mx-auto d-block py-3 mb-3" alt=""/>
           	</a>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 font-weight-bold" >About Us</h5>
              <p>
                <a href="https://bisag.gujarat.gov.in/vision-profile">Vision & Profile</a>
              </p>
              <p>
                <a href="https://bisag.gujarat.gov.in/activities-bisag">Services</a>
              </p>
              <p>
                <a href="https://bisag.gujarat.gov.in/objectives">Objectives</a>
              </p>
              <p>
                <a href="https://bisag.gujarat.gov.in/organizational-setup">Organization Setup</a>
              </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="text-uppercase mb-4 font-weight-bold" >Functional Unit</h5>
              <p>
                <a href="https://bisag.gujarat.gov.in/geo-informatics-applications">Centre for Geo-informatics Applications</a>
              </p>
              <p>
                <a href="https://bisag.gujarat.gov.in/informatics-training">Centre for Informatics and Training</a>
              </p>
              <p>
                <a href="https://bisag.gujarat.gov.in/sustainable-development">Academy of Geo-informatics for Sustainable Development</a>
              </p>
              <p>
                <a href="https://bisag.gujarat.gov.in/control-cell">Standardization and Quality Control Cell</a>
              </p>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 font-weight-bold">SATCOM</h5>
              <p>
                <a href="https://bisag.gujarat.gov.in/satcom-utilization">Growth in SATCOM Utilization</a>
              </p>
              <p>
                <a href="https://bisag.gujarat.gov.in/gujarat-satcom-network">Gujarat SATCOM Network</a>
              </p>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 font-weight-bold">E-citizen</h5>
              <p>
                <a href="https://bisag.gujarat.gov.in/right-to-information">Right to Information</a>
              </p>
              <p>
                <a href="https://bisag.gujarat.gov.in/useful-website">Useful Website</a>
              </p>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 font-weight-bold" >Training</h5>
              <p>
                <a href="https://bisag.gujarat.gov.in/training-workshop">Training / Workshop</a>
              </p>
              <p>
                <a href="https://bisag.gujarat.gov.in/faq">FAQ</a>
              </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 ">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://bisag.gujarat.gov.in/"> bisag.gujarat.gov.in </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;