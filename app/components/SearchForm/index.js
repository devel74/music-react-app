import React, { PropTypes } from 'react';

import Button from 'components/Button';

import Wrapper from './Wrapper';
import Field from './Field';
import spinImg from './img/spin.gif';
import Spin from './Spin';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.setIsLoading = this.setIsLoading.bind(this);
    this.state = {
      typeText: '',
      isLoading: false,
    };
  }
  onSearchInputChange() {
    this.setState({
      typeText: this.searchForm.searchInput.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const name = this.searchForm.searchInput.value;
    this.props.searchArtist(name || 'a', this.setIsLoading);
  }
  setIsLoading(isLoading) {
    this.setState({
      isLoading,
    });
  }
  render() {
    return (
      <Wrapper>
        <form
          onSubmit={(e) => this.onSubmit(e)}
          className="form-inline"
          ref={(form) => { this.searchForm = form; }}
        >
          <Field>
            <label htmlFor="searchInput">Поиск:</label>
            <Spin isDisplay={this.state.isLoading} img={spinImg}/>
          </Field>
          <Field>
            <input onChange={this.onSearchInputChange} className="form-control" id="searchInput" type="text" />
          </Field>
          <div className="form-group">
            <Button isSubmit isLoading={this.state.isLoading}>Искать {this.state.typeText}</Button>
          </div>
        </form>
      </Wrapper>
    );
  }
}

SearchForm.propTypes = {
  searchArtist: PropTypes.func,
};

export default SearchForm;
