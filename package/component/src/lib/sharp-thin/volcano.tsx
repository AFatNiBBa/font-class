
import { Icon } from "../../index";

/**
 * A component that renders the `volcano` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volcano?s=sharp-thin volcano}
 * @preview ![volcano](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/volcano.svg)
 */
const Volcano: typeof Icon = x => (
    <Icon {...x}>
        <path d="M210.9 47.4C217.7 29.1 235.3 16 256 16s38.3 13.1 45.1 31.4l4.8 13.2 8.9-10.9C323.6 38.9 337 32 352 32c26.5 0 48 21.5 48 48s-21.5 48-48 48l-49.5 0-4.4 0-2.4 3.7L267.6 176l-23.2 0-28.2-44.3-2.4-3.7-4.4 0L160 128c-26.5 0-48-21.5-48-48s21.5-48 48-48c15 0 28.4 6.9 37.2 17.7l8.9 10.9 4.8-13.2zM256 0c-23.3 0-43.6 12.4-54.8 31C190 21.6 175.7 16 160 16c-35.3 0-64 28.7-64 64s28.7 64 64 64l45.1 0 28.2 44.3 2.4 3.7 4.4 0 32 0 4.4 0 2.4-3.7L306.9 144l45.1 0c35.3 0 64-28.7 64-64s-28.7-64-64-64c-15.7 0-30 5.6-41.2 15C299.6 12.4 279.3 0 256 0zM16 446.1l94.2-106L128 352l112-32 80 64 83.6-41.8L496 446.1l0 49.9L16 496l0-49.9zM418.5 334.8l-11-12.4L320 224l-128 0-84.5 95.1s0 0 0 0L96.7 331.2s0 0 0 0L0 440l0 56 0 16 16 0 480 0 16 0 0-16 0-56L418.5 334.8zM199.2 240l113.6 0 79.8 89.8L322 365.1l-72-57.6-6.4-5.2-7.9 2.3-104.9 30-9.8-6.5 78.3-88z" />
    </Icon>
);

export default Volcano;