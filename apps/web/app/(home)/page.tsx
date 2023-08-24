import { Button } from 'ui';

import Badges from './badges';
import Hero from './hero';
import Section from './section';
import Slider from './slider';

export default function Page(): JSX.Element {
  return (
    <div>
      <Hero />
      <Section>
        <Badges />
      </Section>
      <div className="bg-secondary-50">
        <Section title="Popular destinations" titleCentered>
          <Slider />
          <div className="text-center mt-10">
            <Button uiSize="medium" variant="secondary" rounded>
              See all
            </Button>
          </div>
        </Section>
      </div>
    </div>
  );
}
