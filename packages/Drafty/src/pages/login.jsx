import {Container, Row, Col } from 'components/components/Bootstrap';
import React from 'react';
export default function Login() {
  if(typeof window !== 'undefined') {
    window.react1 = React;


  }
    return (
      <div className="mt-lg-0 ml-lg-0 pr-lg-0 mb-lg-0 pb-lg-0 mr-lg-0 pl-lg-0 pt-lg-0 bg-grad-primary-dark-reverse">
        
        <Container fluid>
          <Container small>
                What
          </Container>
        </Container>
        
        
        <div className="container pb-lg-8 mt-lg-0 pb-2 pr-lg-0 pl-0 pr-0 pt-md-8 pt-sm-2 pt-lg-8 mb-lg-0 pl-lg-0 pt-2 pb-sm-2 pb-md-8">
          <div className="row align-items-md-start flex-md-row">
            <div className="col col-12 col-md-2 col-sm-12 col-lg-2"></div>
            <div className="col col-lg-8 col-12 col-sm-12 col-md-8">
              <div className="mt-lg-0 pr-lg-0 mt-(none) mb-md-(none) mt-sm-(none) ml-lg-0 mb-(none) mb-sm-(none) mb-lg-0 pb-lg-0 mr-lg-0 mt-md-(none) pl-lg-0 pt-lg-0">
                <div id="fragment-425074-olcf">
                  <div className="margin-top-large margin-bottom-large">
                    <h1
                      className="align-center color-light"
                      data-lfr-editable-id="text"
                      data-lfr-editable-type="text"
                    >
                      What is Drafty?
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-12 col-md-2 col-sm-12 col-lg-2"></div>
          </div>
        </div>
      </div>
    );
}