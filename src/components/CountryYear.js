import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCountries } from "../actions";

class CountryYear extends Component {
  componentDidMount() {
    this.props.fetchCountries();
  }

  getCountryCode = (countryCode) => {
    this.props.country(countryCode);
  };

  renderedCountries = () => {
    if (this.props.countries) {
      return (
        <select
          className="ui search dropdown"
          onChange={(e) => this.getCountryCode(e.target.value)}
        >
          <option>United kingdom</option>
          {this.props.countries.countries.map((country) => {
            return (
              <option key={country.country_name} value={country["iso-3166"]}>
                {country.country_name}
              </option>
            );
          })}
        </select>
      );
    }
  };
  render() {
    return <>{this.renderedCountries()}</>;
  }
}

const mapStateToProps = (state) => {
  return { countries: state.countries[0] };
};

export default connect(mapStateToProps, { fetchCountries })(CountryYear);
