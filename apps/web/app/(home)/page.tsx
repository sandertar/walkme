import { Button } from 'ui';

import { Section } from '../../components';
import { getTrails } from '../../services/trails';

import Badges from './badges';
import Hero from './hero';
import Slider from './slider';

export default async function Page(): Promise<JSX.Element> {
  const trails = await getTrails();
  return (
    <div>
      <Hero />
      <Section>
        <Badges />
      </Section>
      <div className="bg-secondary-50">
        <Section title="Popular destinations" titleCentered>
          <Slider trails={trails} />
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
