
import { Icon } from "../../index";

/**
 * A component that renders the `eject` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eject?s=thin eject}
 * @preview ![eject](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/eject.svg)
 */
const Eject: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 80c-9 0-17.5 3.8-23.6 10.4l-176 192c-8.6 9.4-10.8 22.9-5.7 34.5S35.3 336 48 336l352 0c12.7 0 24.2-7.5 29.3-19.1s2.9-25.2-5.7-34.5l-176-192C241.5 83.8 233 80 224 80zm0-16c13.5 0 26.3 5.6 35.4 15.6l176 192c12.9 14 16.2 34.3 8.6 51.8S419 352 400 352L48 352c-19 0-36.3-11.2-43.9-28.7s-4.3-37.7 8.6-51.8l176-192C197.7 69.6 210.5 64 224 64zM8 432l432 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 448c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default Eject;