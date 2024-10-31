
import { Icon } from "../../index";

/**
 * A component that renders the `octagon` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon?s=light octagon}
 * @preview ![octagon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/octagon.svg)
 */
const Octagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M161.5 43.7L43.7 161.5C36.2 169 32 179.2 32 189.8l0 132.4c0 10.6 4.2 20.8 11.7 28.3L161.5 468.3c7.5 7.5 17.7 11.7 28.3 11.7l132.4 0c10.6 0 20.8-4.2 28.3-11.7L468.3 350.5c7.5-7.5 11.7-17.7 11.7-28.3l0-132.4c0-10.6-4.2-20.8-11.7-28.3L350.5 43.7C343 36.2 332.8 32 322.2 32L189.8 32c-10.6 0-20.8 4.2-28.3 11.7zM21.1 138.9L138.9 21.1C152.4 7.6 170.7 0 189.8 0L322.2 0c19.1 0 37.4 7.6 50.9 21.1L490.9 138.9c13.5 13.5 21.1 31.8 21.1 50.9l0 132.4c0 19.1-7.6 37.4-21.1 50.9L373.1 490.9c-13.5 13.5-31.8 21.1-50.9 21.1l-132.4 0c-19.1 0-37.4-7.6-50.9-21.1L21.1 373.1C7.6 359.6 0 341.3 0 322.2L0 189.8c0-19.1 7.6-37.4 21.1-50.9z" />
    </Icon>
);

export default Octagon;