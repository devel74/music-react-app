import React, { PropTypes } from 'react';

import Button from 'components/Button';

import Wrapper from './Wrapper';
import Field from './Field';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.state = {
      typeText: '',
    };
  }
  onSearchInputChange() {
    this.setState({
      typeText: this.searchForm.searchInput.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
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
          </Field>
          <Field>
            <input onChange={this.onSearchInputChange} className="form-control" id="searchInput" type="text" />
          </Field>
          <div className="form-group">
            <Button isSubmit>Искать {this.state.typeText}</Button>
          </div>
        </form>
      </Wrapper>
    );
  }
}

SearchForm.propTypes = {
};

export default SearchForm;
