
import { Icon } from "../../index";

/**
 * A component that renders the `person-hiking` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-hiking?s=light person-hiking}
 * @preview ![person-hiking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/person-hiking.svg)
 */
const PersonHiking: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M288 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-80 0a56 56 0 1 1 112 0A56 56 0 1 1 208 56zM102.9 128.4c-19 2.5-35 16.1-40.1 35L40.2 246.3l31.9 5.3 30.8-123.2zm-1.5 138.1c-3 12.1-14.9 19.9-27.2 17.9l-47.9-8c-14-2.3-22.9-16.3-19.2-30L31.9 155c9.5-34.8 41.1-59 77.2-59l4.2 0c15.6 0 27.1 14.7 23.3 29.8L101.4 266.5zM368 160c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-240-39.2 0c-10.9 0-21.1-5.6-27-14.8l-20.7-32.5L237.2 333.5l36.6 24.4c8.9 5.9 14.2 15.9 14.2 26.6L288 496c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-111.4-95-63.3c-16.3-10.8-24.3-30.4-20.4-49.6l19.8-96.5c6.1-29.9 35.1-49.3 65-43.7c20.6 3.9 38.7 16.1 50 33.8L312.8 224l39.2 0 0-48c0-8.8 7.2-16 16-16zM123.7 334.8c.5 .4 1.1 .8 1.6 1.1l26.4 17.6L111.4 500.2c-2.3 8.5-11.1 13.5-19.7 11.2s-13.5-11.2-11.2-19.7l43.2-157zm68.1-153.2L172 278.1c-1.3 6.4 1.4 12.9 6.8 16.5l29.8 19.9L240.3 173c-5.8-5.1-13-8.6-20.7-10c-12.8-2.4-25.1 5.9-27.8 18.6z" />
    </Icon>
);

export default PersonHiking;