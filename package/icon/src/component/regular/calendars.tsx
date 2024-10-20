
import { Icon } from "../../index";

/**
 * A component that renders the `calendars` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendars?s=regular calendars}
 * @preview ![calendars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/calendars.svg)
 */
const Calendars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 0c13.3 0 24 10.7 24 24l0 40 112 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 40 0c35.3 0 64 28.7 64 64l0 48 0 16 0 160c0 35.3-28.7 64-64 64l-288 0c-35.3 0-64-28.7-64-64l0-160 0-16 0-48c0-35.3 28.7-64 64-64l40 0 0-40c0-13.3 10.7-24 24-24zM144 192l0 160c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-160-320 0zm-96-8l0 208c0 39.8 32.2 72 72 72l272 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-272 0C53.7 512 0 458.3 0 392L0 184c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default Calendars;