
import { Icon } from "../../index";

/**
 * A component that renders the `soft-serve` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/soft-serve?s=sharp-thin soft-serve}
 * @preview ![soft-serve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/soft-serve.svg)
 */
const SoftServe: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M200 0L185.1 0l8.3 12.4 10.8 16.3c2.5 3.7 3.8 8.1 3.8 12.6C208 53.8 197.8 64 185.3 64L108 64c-33.1 0-60 26.9-60 60c0 13.5 4.5 26 12 36l-4 0 0 .5C24.4 164.4 0 191.4 0 224l0 56 0 8 8 0 368 0 8 0 0-8 0-56c0-32.6-24.4-59.6-56-63.5l0-.5-8 0-1.8 0c11.1-12.5 17.8-29 17.8-47C336 50.6 285.4 0 223 0L200 0zm93.6 160L232 160l-8 0 0 16 8 0 33.1 0 30.6 0 24.3 0c26.5 0 48 21.5 48 48l0 48L16 272l0-48c0-26.5 21.5-48 48-48l16.3 0 23.7 0 3.9 0 4.1 0 0-16-8 0-21.3 0C71.4 152 64 138.9 64 124c0-24.3 19.7-44 44-44l77.3 0C206.7 80 224 62.7 224 41.3c0-7.6-2.3-15.1-6.5-21.5L214.9 16l8.1 0c53.6 0 97 43.4 97 97c0 19.9-10.6 37.3-26.4 47zM64 328l0-8-16 0 0 8 0 48 0 8 8 0 32.9 0 15.1 121 .9 7 7.1 0 160 0 7.1 0 .9-7 15.1-121 32.9 0 8 0 0-8 0-48 0-8-16 0 0 8 0 40-32 0-7.1 0-.9 7L264.9 496l-145.9 0L103.9 375l-.9-7L96 368l-32 0 0-40z" />
    </Icon>
);

export default SoftServe;