'use strict';

import React from 'react';
import Fuse from 'fuse.js';

class DataTableView extends React.Component {

  constructor(props) {
    super();
    this.state = {
      list: [],
      direction: 0,
      keySorted: 'start_date'
    };
    this.keySorted = 'start_date';
  }

  componentWillReceiveProps(newProps) {
    newProps.data && this.setState({ list: newProps.data });
    this.list = newProps.data;
    this.options = {
      caseSensitive: false,
      includeScore: false,
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      keys: ['name', 'start_date', 'htag']
    };

    this.fuse = new Fuse(this.list, this.options);
  }

  search(event) {
    const token = event.target.value;

    if (token !== '') {
      const result = this.fuse.search(token);
      this.setState({ list: result });
    } else {
      this.setState({ list: this.list });
    }
  }

  sortIndex(a, b) {
    const keySorted = this.keySorted;

    if (a[keySorted] < b[keySorted])
      return -1;
    if (a[keySorted] > b[keySorted])
      return 1;
    return 0;
  }

  sortBy(keySorted) {
    let sortList = this.props.data.campaignsList;
    this.keySorted = keySorted;
    const direction = this.state.direction < 2 ? this.state.direction + 1 : 0;

    if (direction !== 0) {
      sortList = sortList.sort(this.sortIndex.bind(this));
    } else {
      this.keySorted = 'create_at';
      sortList = sortList.sort(this.sortIndex.bind(this)).reverse();
    }

    if (direction === 2) {
      sortList = sortList.reverse();
    }

    this.setState({ list: sortList, direction });
  }


  render() {
    const list = this.state.list;

    return (
      <div className="l-table">
        <div className="wrap">
          <div className="c-search col-xs-12">
            <input type="text" className="search-input" placeholder="Search" onChange={ (event) => this.search(event) } />
            <svg className="icon icon-search" >
              <use xlinkHref="#icon-search"></use>
            </svg>
          </div>
        </div>

        <table className="c-table table">
          <thead>
            <tr>
              <th className="text text-menu -dark">Start / End Date
                <div className="sort" onClick={ () => this.sortBy('start_date') }>
                  <svg className="icon icon-TriangleDown sort-arrow" >
                    <use xlinkHref="#icon-TriangleDown"></use>
                  </svg>
                  <svg className="icon icon-TriangleDown sort-arrow" >
                    <use xlinkHref="#icon-TriangleDown"></use>
                  </svg>
                </div>
              </th>
              <th className="text text-menu -dark">Campaign Name
                <div className="sort" onClick={ () => this.sortBy('name') }>
                  <svg className="icon icon-TriangleDown sort-arrow" >
                    <use xlinkHref="#icon-TriangleDown"></use>
                  </svg>
                  <svg className="icon icon-TriangleDown sort-arrow" >
                    <use xlinkHref="#icon-TriangleDown"></use>
                  </svg>
                </div>
              </th>
              <th className="text text-menu -dark">Tags
                <div className="sort" onClick={ () => this.sortBy('htag') }>
                  <svg className="icon icon-TriangleDown sort-arrow" >
                    <use xlinkHref="#icon-TriangleDown"></use>
                  </svg>
                  <svg className="icon icon-TriangleDown sort-arrow" >
                    <use xlinkHref="#icon-TriangleDown"></use>
                  </svg>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            { list.map((element, i) =>
              <tr key={i} className="wrap text text-desc -dark">
                <td className="text text-desc -dark">{ element.start_date }</td>
                <td className="text text-desc -dark -bold"><a href={`/campaigns/${element.id}`}>{ element.name }</a></td>
                <td className="text text-desc -dark"><button className="c-tag">{ element.htag }</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

DataTableView.propTypes = {
};

export default DataTableView;
