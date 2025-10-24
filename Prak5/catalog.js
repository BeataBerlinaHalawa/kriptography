import React, { Fragment } from "react";
import CatalogItem from "./CatalogItem";

class Catalog extends React.Component {
  constructor() {
    super();
    this.items = [
      ['Classical Mythology', 'Mark P. O. Morford', 'Oxford University Press', 2002],
      ['Rules of the Wild', 'Francesca Marciano', 'Random House Inc', 1998],
      ['Caria Callas', 'Richard Bruce Wright', 'HarperFlamingo Canada', 2001],
      ['Wild Animus', 'Rich Shapero', 'Too Far', 2004],
      ['Tage der Unschuld', 'Richard North Patterson', 'Goldmann', 2000],
      ['The Hellfire Club', 'Peter Straub', 'Random House Inc', 1996],
      ['The Night Listener', 'Armistead Maupin', 'HarperCollins Publishers', 2000],
      ['Night Tales', 'Nora Roberts', 'Silhouette', 2000],
    ];
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          {this.items.map((item, index) => (
            <div className="col-sm-6 col-lg-4 mb-4" key={index}>
              <CatalogItem item={item} />
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Catalog;
