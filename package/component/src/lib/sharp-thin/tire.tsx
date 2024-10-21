
import { Icon } from "../../index";

/**
 * A component that renders the `tire` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tire?s=sharp-thin tire}
 * @preview ![tire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tire.svg)
 */
const Tire: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm304 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-40.1 63.5l0 80.3c57.7-3.2 106.3-40.2 126.3-91.6l-76.4-24.9c-9.2 19.4-27.8 33.5-50 36.2zm54.9-51.4L395.2 293c3.1-11.8 4.8-24.2 4.8-37c0-45-20.6-85.2-52.9-111.6l-47.2 65C312.3 221.1 320 237.6 320 256c0 4.1-.4 8.2-1.1 12.1zM334.1 135c-22.5-14.6-49.3-23-78.1-23s-55.6 8.5-78.1 23l38 52.3L225 200c9.2-5.1 19.7-8 31-8s21.8 2.9 31 8l47.1-65zm-169.2 9.4C132.6 170.8 112 211 112 256c0 12.8 1.7 25.2 4.8 37l76.4-24.9c-.8-3.9-1.1-8-1.1-12.1c0-18.4 7.7-34.9 20.1-46.6l-9.2-12.7-38-52.3zm33.2 138.9l-76.4 24.9c20 51.4 68.6 88.4 126.2 91.6l0-80.3c-22.1-2.8-40.7-16.8-49.8-36.2zM256 96a160 160 0 1 1 0 320 160 160 0 1 1 0-320z" />
    </Icon>
);

export default Tire;