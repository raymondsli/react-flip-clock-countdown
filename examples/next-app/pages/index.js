import React, { useState } from 'react';

import FlipClockCountdown from 'react-flip-clock-countdown';

const Example = () => {
  const [t] = useState(Date.now() + 5 * 1000);
  return (
    <React.Fragment>
      <h1>React flip-clock countdown</h1>
      <div style={{ marginBottom: 30 }}>
        <h2>Default</h2>
        <FlipClockCountdown
          to={new Date().getTime() + 2 * 24 * 3600 * 1000 + 5000}
          now={() => {
            return Math.max(Date.now(), t);
          }}
          stopOnHiddenVisibility
          spacing={{
            clock: 16,
            digitBlock: 4
          }}
        >
          Finished
        </FlipClockCountdown>
      </div>
      <div style={{ marginBottom: 30 }}>
        <h2>Days in Hours</h2>
        <div style={{ marginBottom: 16 }}>
          <FlipClockCountdown
            to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
            daysInHours={true}
            renderOnServer={true}
          >
            Finished
          </FlipClockCountdown>
        </div>
      </div>
      <div style={{ marginBottom: 30 }}>
        <h2>Custom styles</h2>
        <div style={{ marginBottom: 16 }}>
          <FlipClockCountdown
            to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
            labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
            labelStyle={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase' }}
            digitBlockStyle={{ width: 40, height: 60, fontSize: 30, borderRadius: 10 }}
            dividerStyle={{ color: 'red', height: 1 }}
            separatorStyle={{ color: 'red', size: '6px' }}
            duration={0.5}
          >
            Finished
          </FlipClockCountdown>
        </div>
        <div>
          <FlipClockCountdown className='flip-clock' to={new Date().getTime() + 24 * 3600 * 1000 + 5000} />
        </div>
      </div>
      <div style={{ marginBottom: 30 }}>
        <h2>Custom labels</h2>
        <div style={{ marginBottom: 16 }}>
          <FlipClockCountdown
            className='flip-clock'
            to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
            labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
          />
        </div>
        <div>
          <FlipClockCountdown
            className='flip-clock'
            to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
            showLabels={false}
          />
        </div>
      </div>
      <div>
        <h2>Hide separators</h2>
        <FlipClockCountdown
          className='flip-clock'
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          showSeparators={false}
        />
      </div>
      <div>
        <h2>Show/Hide sections</h2>
        <FlipClockCountdown
          className='flip-clock'
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          renderMap={[true, true, true, false]}
        />
      </div>
    </React.Fragment>
  );
};

export default Example;
