import { templateFactory } from 'glimmer-runtime';
import { OWNER } from 'container';

export default function template(json) {
  let factory = templateFactory(json);

  return {
    id: factory.id,
    create(props) {
      return factory.create(props.env, { owner: props[OWNER] });
    }
  };
}
