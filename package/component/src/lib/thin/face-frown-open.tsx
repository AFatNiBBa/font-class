
import { Icon } from "../../index";

/**
 * A component that renders the `face-frown-open` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-frown-open?s=thin face-frown-open}
 * @preview ![face-frown-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-frown-open.svg)
 */
const FaceFrownOpen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm176.4-64a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm144 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm17.1 184.7c-23.4-9.9-49.7-15.5-77.6-15.5c-27.8 0-54.1 5.6-77.5 15.4c-8.7 3.7-18.2 2.3-24.9-2.6c-7-5.2-10.7-14.5-6.4-24.3c17.9-41.2 60-69.9 108.8-69.9c48.8 0 90.9 28.7 108.8 69.9c4.3 9.9 .6 19.1-6.4 24.3c-6.7 4.9-16.2 6.3-24.9 2.6zm16.6-20.5c-15.4-35.3-51.7-60.3-94.2-60.3c-42.5 0-78.8 25-94.2 60.3c-.6 1.5-.5 2.4-.4 3c.2 .6 .7 1.4 1.6 2.1c2 1.5 5.6 2.2 9.1 .7c25.4-10.7 53.8-16.7 83.7-16.7c30 0 58.4 6 83.8 16.7c3.6 1.5 7.1 .8 9.1-.7c1-.7 1.4-1.5 1.6-2.1c.2-.6 .3-1.5-.4-3z" />
    </Icon>
);

export default FaceFrownOpen;