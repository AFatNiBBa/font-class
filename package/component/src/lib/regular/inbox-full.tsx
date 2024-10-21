
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-full` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-full?s=regular inbox-full}
 * @preview ![inbox-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/inbox-full.svg)
 */
const InboxFull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 416c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-80-81.2 0-20.9 41.9c-6.8 13.6-20.6 22.1-35.8 22.1l-140.2 0c-15.2 0-29-8.6-35.8-22.1L129.2 336 48 336l0 80zM405.6 92.1C403.8 85 397.4 80 390 80L122 80c-7.3 0-13.7 5-15.5 12.1L57.5 288l76.6 0c15.2 0 29 8.6 35.8 22.1L190.8 352l130.3 0 20.9-41.9c6.8-13.6 20.6-22.1 35.8-22.1l76.6 0-49-195.9zM0 416l0-88.1c0-5.2 .6-10.4 1.9-15.5l58-231.9C67 52 92.6 32 122 32L390 32c29.4 0 55 20 62.1 48.5l58 231.9c1.3 5.1 1.9 10.3 1.9 15.5l0 88.1c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64zM184 128l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm-32 80l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default InboxFull;