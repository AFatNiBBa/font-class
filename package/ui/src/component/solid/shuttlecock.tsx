
import { Icon } from "../../index";

/**
 * A component that renders the `shuttlecock` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shuttlecock?s=solid shuttlecock}
 * @preview ![shuttlecock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/shuttlecock.svg)
 */
const Shuttlecock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 32c0 8.8-7.2 16-16 16c-24.4 0-46 15.8-53.4 39.1l-29.3 92.8c-1.3 4.1-4.2 7.6-8.1 9.5l-32.4 16.2c-3.1 1.5-5.6 4.1-7.2 7.2l-32.5 64.9c-3.1 6.2-1.9 13.6 3 18.5L163 315l71.9-71.9L281.1 96.8C284.3 86.8 293.5 80 304 80l104 0c13.3 0 24 10.7 24 24l0 104c0 10.5-6.8 19.7-16.8 22.9L268.8 277.1 197 349l18.9 18.9c4.9 4.9 12.3 6.1 18.5 3l64.9-32.5c3.1-1.5 5.6-4.1 7.2-7.2l16.2-32.4c1.9-3.9 5.4-6.8 9.5-8.1l92.8-29.3c23.3-7.4 39.1-29 39.1-53.4c0-8.8 7.2-16 16-16l8 0c13.3 0 24 10.7 24 24l0 51.7c0 12.4-7.2 23.7-18.4 29L250.1 411.2c-6.7 3.1-12.8 7.4-18 12.7l-28.8 28.8-144-144 28.8-28.8c5.2-5.2 9.5-11.3 12.7-18L215.4 18.4C220.6 7.2 231.9 0 244.3 0L296 0c13.3 0 24 10.7 24 24l0 8zM36.7 331.3l144 144-6.9 6.9c-19.1 19.1-45 29.8-72 29.8C45.6 512 0 466.4 0 410.2c0-27 10.7-52.9 29.8-72l6.9-6.9z" />
    </Icon>
);

export default Shuttlecock;