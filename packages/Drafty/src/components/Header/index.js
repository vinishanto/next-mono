
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <details className="browser-error">
                <summary style={{display:"none"}}>Browser error</summary>
                <span>
                  <span className="small">
                    <strong>Your browser cannot support this website.</strong>
                  </span>
                  <span className="tiny">
                    Please consider upgrading to a more modern browser.
                  </span>
                </span>
              </details>
              <nav>
                <ul className="top">
                  <li className="logo">
                    <Link href="/">
                      <a data-track="DraftyLogoSignedOut">
                        <picture>
                          <img
                            alt="Drafty Logo"
                            decoding="async"
                            height="113"
                            src="https://d3r9rfvt26tec0.cloudfront.net/gc_uploads/documents/799296/0/drafty_logo.svg?t=1626773667380"
                            width="228"
                          />
                        </picture>
                      </a>
                    </Link>
                  </li>
                  <li className="links">
                    <ul className="menu-links">
                      <li>
                        <Link href="/">
                          <a data-track="HomeHeaderSignedOut">
                            Home
                          </a>
                        </Link>
                      </li>
                      <li>
                        <a
                          data-track="AboutHeaderSignedOut"
                          href="/about/aboutus"
                        >
                          About Drafty
                        </a>
                      </li>
                      <li>
                        <a
                          data-track="PricingHeaderSignedOut"
                          href="/about/pricing"
                        >
                          Pricing
                        </a>
                      </li>
                      <li className="sub-menu">
                        <details>
                          <summary>Info</summary>
                          <ul className="sub-menu-drop">
                            <li>
                              <a data-track="FaqsHeaderSignedOut" href="/faqs">
                                FAQs
                              </a>
                            </li>
                            <li>
                              <a
                                data-track="PaydayLoansHeaderSignedOut"
                                href="/loans/payday-loans/"
                              >
                                Payday Loans
                              </a>
                            </li>
                            <li>
                              <a
                                data-track="LoansHeaderSignedOut"
                                href="/loans"
                              >
                                Loans info
                              </a>
                            </li>
                            <li>
                              <a
                                data-track="CompareLoansHeaderSignedOut"
                                href="/compare-loans"
                              >
                                Compare loans
                              </a>
                            </li>
                            <li>
                              <a data-track="BlogHeaderSignedOut" href="/blog">
                                Blog
                              </a>
                            </li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <a
                          data-track="ContactUsHeaderSignedOut"
                          href="/contact/contactus"
                        >
                          Contact
                        </a>
                      </li>
                      <li>
                        <Link href="/login"> 
                          <a
                            aria-label="Sign In"
                            className="fill small"
                            data-track="SignInButton"
                            role="button"
                          >
                            
                            <span aria-hidden="true" data-remove-div="true">
                              SIGN IN
                            </span>
                            
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="drop-down">
                    <details>
                      <summary>
                        <span className="icon-open"></span>
                        <span className="icon-close"></span>
                      </summary>
                      <ul className="menu-links drop">
                        <li>
                          <Link href="/">

                            <a data-track="HomeHeaderSignedOut">
                              Home
                            </a>
                          </Link>
                        </li>
                        <li>
                          <a
                            data-track="AboutHeaderSignedOut"
                            href="/about/aboutus"
                          >
                            About Drafty
                          </a>
                        </li>
                        <li>
                          <a
                            data-track="PricingHeaderSignedOut"
                            href="/about/pricing"
                          >
                            Pricing
                          </a>
                        </li>
                        <li className="sub-menu">
                          <details>
                            <summary>Info</summary>
                            <ul className="sub-menu-drop">
                              <li>
                                <a
                                  data-track="FaqsHeaderSignedOut"
                                  href="/faqs"
                                >
                                  FAQs
                                </a>
                              </li>
                              <li>
                                <a
                                  data-track="PaydayLoansHeaderSignedOut"
                                  href="/loans/payday-loans/"
                                >
                                  Payday Loans
                                </a>
                              </li>
                              <li>
                                <a
                                  data-track="LoansHeaderSignedOut"
                                  href="/loans"
                                >
                                  Loans info
                                </a>
                              </li>
                              <li>
                                <a
                                  data-track="CompareLoansHeaderSignedOut"
                                  href="/compare-loans"
                                >
                                  Compare loans
                                </a>
                              </li>
                              <li>
                                <a
                                  data-track="BlogHeaderSignedOut"
                                  href="/blog"
                                >
                                  Blog
                                </a>
                              </li>
                            </ul>
                          </details>
                        </li>
                        <li>
                          <a
                            data-track="ContactUsHeaderSignedOut"
                            href="/contact/contactus"
                          >
                            Contact
                          </a>
                        </li>
                        <li>
                        <Link href="/login"> 
                          <a
                            aria-label="Sign In"
                            className="fill small"
                            data-track="SignInButton"
                            role="button"
                          >
                            
                            <span aria-hidden="true" data-remove-div="true">
                              SIGN IN
                            </span>
                            
                          </a>
                        </Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
