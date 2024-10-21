
import { Icon } from "../../index";

/**
 * A component that renders the `kite` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kite?s=regular kite}
 * @preview ![kite](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/kite.svg)
 */
const Kite: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M368 48l216 0c2.2 0 4.2 .9 5.7 2.3L480 160 592 272l0 6.3c0 3.7-2.6 7-6.3 7.8L289.8 351.9c-.3-.3-.5-.6-.8-.9L480 160 368 48zm-61-4.1L234.1 372l-87.5 87.5c-2.9 2.9-6.9 4.6-11 4.6c-8.6 0-15.6-7-15.6-15.6l0-88.6-24-12-24 12 0 88.6c0 35.1 28.5 63.6 63.6 63.6c16.9 0 33-6.7 45-18.6L268 405.9 596.1 333c25.6-5.7 43.9-28.4 43.9-54.7L640 56c0-30.9-25.1-56-56-56L361.7 0c-26.2 0-49 18.2-54.7 43.9zM0 152c0 13.3 10.7 24 24 24l8 0c22.1 0 40 17.9 40 40l0 68L18.7 257.4c-1.8-.9-3.8-1.4-5.8-1.4C5.8 256 0 261.8 0 268.9l0 70.1C0 346.2 5.8 352 12.9 352c2 0 4-.5 5.8-1.4L72 324s0 0 0 0l9.7-4.8c4.5-2.3 9.4-3.4 14.3-3.4l.5 0c3.5 .1 7 .7 10.4 1.9c1.2 .4 2.3 .9 3.4 1.5c0 0 0 0 0 0L120 324l53.3 26.6c1.8 .9 3.8 1.4 5.8 1.4c7.1 0 12.9-5.8 12.9-12.9l0-70.1c0-7.1-5.8-12.9-12.9-12.9c-2 0-4 .5-5.8 1.4L120 284l0-68c0-48.6-39.4-88-88-88l-8 0c-13.3 0-24 10.7-24 24z" />
    </Icon>
);

export default Kite;