
import { Icon } from "../../index";

/**
 * A component that renders the `family` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/family?s=solid family}
 * @preview ![family](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/family.svg)
 */
const Family: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0a64 64 0 1 1 0 128A64 64 0 1 1 128 0zM105.6 160l44.8 0c9.2 0 18.1 1.6 26.4 4.5c-.5 3.8-.8 7.6-.8 11.5c0 24.3 10.9 46.1 28 60.8c-35.7 18.7-60 56.1-60 99.2l0 16c0 28.4 12.4 54 32 71.6l0 56.4c0 6.1 .8 11.9 2.4 17.5c-8.7 9-20.9 14.5-34.4 14.5l-32 0c-26.5 0-48-21.5-48-48l0-115.7c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3C29.3 191.9 64 160 105.6 160zM368 512c-13.5 0-25.7-5.6-34.4-14.5c1.6-5.6 2.4-11.4 2.4-17.5l0-56.4c19.6-17.6 32-43.1 32-71.6l0-16c0-43.1-24.3-80.5-60-99.2c17.1-14.7 28-36.5 28-60.8c0-2.4-.1-4.7-.3-7.1c9.6-5.7 20.8-8.9 32.6-8.9l31.4 0c28.6 0 53.7 18.9 61.5 46.4l39.1 136.8c5.8 20.4-9.5 40.8-30.8 40.8L448 384l0 80c0 26.5-21.5 48-48 48l-32 0zM384 0a64 64 0 1 1 0 128A64 64 0 1 1 384 0zM256 128a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 128c44.2 0 80 35.8 80 80l0 16c0 23.7-12.9 44.4-32 55.4l0 72.6c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-72.6c-19.1-11.1-32-31.7-32-55.4l0-16c0-44.2 35.8-80 80-80z" />
    </Icon>
);

export default Family;