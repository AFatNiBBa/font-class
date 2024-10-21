
import { Icon, generic } from "../../index";

/**
 * A component that renders the `planet-ringed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/planet-ringed?s=sharp-duotone-solid planet-ringed}
 * @preview ![planet-ringed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/planet-ringed.svg)
 */
const PlanetRinged: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M8.1 503.9s-4-58.2 59.2-158.8c.1-.2 .3-.4 .5-.4c2.2 4.7 4.6 9.3 7.2 13.9c2.6 4.6 5.4 9 8.5 13.7c3 4.4 6.2 8.8 9.7 13.2c1.7 2.1 3.4 4.2 5.3 6.4c.9 1 1.7 2 2.8 3.2c.8 .9 1.7 1.8 2.6 2.8c-5.7 8.8-11.1 17.8-16.3 26.9c9.1-5.2 18-10.6 26.9-16.3c58.5-37.6 111.3-85 160.1-133.8s96.3-101.7 133.8-160.1c5.7-8.8 11.1-17.8 16.3-26.9c-9.1 5.2-18 10.6-26.9 16.3c-2.1-1.9-4.1-3.7-6.2-5.5c-2.2-1.9-4.3-3.7-6.6-5.4c-2-1.6-4-3.1-6-4.6c-2.4-1.8-4.9-3.5-7.4-5.2c-2.1-1.4-4.2-2.7-6.3-4.1c-2.3-1.4-4.7-2.8-7-4.2c-2.2-1.2-4.4-2.4-6.7-3.6c-2.4-1.2-4.7-2.4-6.2-4.1c89.2-55.9 145-59 156.4-59c1.4 0 2.1 0 2.1 0s4 58.4-59.6 159.4c-27.2 43.3-66.9 94.4-124.6 152.1S210.9 417.1 167.5 444.3C66.5 507.9 8.1 503.9 8.1 503.9z" />
        <path d="M408.3 114.3C370.3 73.5 316.1 48 256 48C141.1 48 48 141.1 48 256c0 60.1 25.5 114.3 66.3 152.3c58.5-37.6 111.3-85 160.1-133.8s96.3-101.7 133.8-160.1zm36 53.2c-27.2 43.3-66.9 94.4-124.6 152.1S210.9 417.1 167.5 444.3C194.4 456.9 224.4 464 256 464c114.9 0 208-93.1 208-208c0-31.6-7.1-61.6-19.7-88.5z" />
    </Icon>
);

export default PlanetRinged;