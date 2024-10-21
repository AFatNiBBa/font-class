
import { Icon } from "../../index";

/**
 * A component that renders the `panorama` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/panorama?s=sharp-thin panorama}
 * @preview ![panorama](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/panorama.svg)
 */
const Panorama: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 48L0 32l16 0 37.5 0C138.3 62.3 230.5 72 320 72s181.7-9.7 266.5-40L624 32l16 0 0 16 0 416 0 16-16 0-37.5 0c-84.8-30.3-176.9-40-266.5-40c-73.4 0-148.5 6.5-219.9 25.6c-1.2 .7-2.7 1.1-4.1 1.1C81.7 470.6 67.5 475 53.5 480L16 480 0 480l0-16L0 48zM220.7 428.4L270 362.7l-46-61.3L116.2 445c34.4-8 69.4-13.3 104.5-16.6zM320 424c74 0 150.4 6.6 223.5 25.9L384 237.3 286.4 367.5 242 426.7c26.1-1.9 52.2-2.7 78-2.7zm269.2 40l34.8 0 0-416-34.8 0C502.8 78.4 409.6 88 320 88s-182.8-9.6-269.2-40L16 48l0 416 34.8 0c13.4-4.7 27-8.9 40.7-12.7L217.6 283.2l6.4-8.5 6.4 8.5L280 349.3l97.6-130.1 6.4-8.5 6.4 8.5L569 457.3c6.8 2.1 13.5 4.3 20.2 6.7zM128 144a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm32 48a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Panorama;