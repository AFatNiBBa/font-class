
import { Icon } from "../../index";

/**
 * A component that renders the `whale` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whale?s=sharp-thin whale}
 * @preview ![whale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/whale.svg)
 */
const Whale: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M168 20.4l14.2 85.3L267.6 120l5.6 .9 13.8 2.3-9.9 9.9-4 4-60 60-2.6 2.6-3.7-.6-73.6-12.3L90.6 255c-6.7 10.7-8.3 23.9-4.3 35.9c5.8 17.3 22 29 40.3 29l1.1 0c10.5 0 20.7-3.8 28.6-10.6l103.8-89C329.7 160.8 418.4 128 510.1 128L624 128l16 0 0 16 0 320 0 16-16 0-461.6 0C72.7 480 0 407.3 0 317.6c0-39.5 15.7-77.3 43.6-105.2l57.6-57.6L88.9 81.2l-.6-3.7 2.6-2.6 60-60 4-4L164.8 1l2.3 13.8 .9 5.6zm11.6 101.1l-11.3-1.9-1.9-11.3L154.1 34.3 105.4 83 117 152.2l1.4 8.1-5.8 5.8L54.9 223.7C30 248.6 16 282.4 16 317.6C16 398.5 81.5 464 162.4 464L624 464l0-320-113.9 0c-87.8 0-172.8 31.4-239.5 88.6l-103.8 89C155.9 330.9 142 336 127.7 336l-1.1 0c-25.2 0-47.5-16.1-55.5-40c-5.5-16.5-3.4-34.7 5.9-49.5l42.6-68.2 5.7-9.1 10.5 1.8L205 182.6l48.7-48.7-74.1-12.3zM400 288a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Whale;