'use babel';

import { h, render, Component } from 'preact';
import { get } from 'http';

export default class USAPresidentComponent extends Component {
  componentDidMount() {
    this.fetch();
  };

  fetch = () => {
    get('http://elections.huffingtonpost.com/2016/results/president.json', (res) => {
      res.setEncoding('utf8');
      let rawData = '';

      res.on('data', (chunk) => rawData += chunk);

      res.on('end', () => {
        parsedData = JSON.parse(rawData);

        this.setState({
          clinton: parsedData.summaries.president.nClintonElectoralVotes,
          trump: parsedData.summaries.president.nTrumpElectoralVotes,
        });
        setTimeout(this.fetch, 60000);
      });
    });
  }

  render() {
    const { clinton, trump } = this.state
    return h('span', {}, `Clinton: ${clinton || 0} vs Trump: ${trump || 0}`)
  }
}
