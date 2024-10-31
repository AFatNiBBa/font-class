
import { Icon } from "../../index";

/**
 * A component that renders the `person-running` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-running?s=sharp-regular person-running}
 * @preview ![person-running](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/person-running.svg)
 */
const PersonRunning: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M272 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM128 112l8 0 64 0 3.2 0 3.1 .8 88 24 12.7 3.5 3.9 12.6L337.7 240l54.3 0 24 0 0 48-24 0-72 0-17.7 0-5.2-16.9-12.5-40.8-28.1 84.4 43.4 24.4 16.9 9.5-5.8 18.5L265.6 512l-50.3 0 43.9-140.6-88-49.5c-23.4-13.2-34.2-41.1-25.7-66.5L177.4 160 144 160 86.4 203.2 67.2 217.6 38.4 179.2l19.2-14.4 64-48L128 112zm97.4 55.8L191.1 270.5c-1.2 3.6 .3 7.6 3.7 9.5l19 10.7 38.5-115.6-27-7.4zM122.5 317.1c7.7 13.3 18.9 24.7 33 32.6l4.9 2.8-18 47.9L136.6 416 120 416l-96 0L0 416l0-48 24 0 79.4 0 19.1-50.9z" />
    </Icon>
);

export default PersonRunning;