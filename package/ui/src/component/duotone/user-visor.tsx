
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-visor` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-visor?s=duotone user-visor}
 * @preview ![user-visor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-visor.svg)
 */
const UserVisor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M105 175.2c1.1 .3 2.3 .4 3.4 .6c.6 .1 1.2 .1 1.8 .1s1.2 0 1.8 0l224 0c2.4 0 4.8-.3 7-.8C324.2 222.5 278 256 224 256s-100.2-33.5-119-80.8zM124.1 48C147.5 18.7 183.6 0 224 0s76.5 18.7 99.9 48L124.1 48zM284 459c3.9-36.5 15.9-66.5 35.7-89.5c1.5-1.8 4.9-1.9 6.1 .1c18.9 24.6 29 55 30.1 90.2c0 3.9-4.9 5.7-7.3 2.5c-12.2-17.2-17.6-23-19.9-25c-9.5 0-22.5 11.4-32.9 20.5c-2.1 1.8-3.9 3.4-5.5 4.6c-2.8 2-6.8 .1-6.5-3.5z" />
        <path d="M80 80c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32l0-64zm48 32c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L144 96c-8.8 0-16 7.2-16 16zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zm348.7-19.9c2.4 3.2 7.3 1.4 7.3-2.5c-1.1-35.3-11.3-65.6-30.1-90.2c-1.2-2-4.6-1.9-6.1-.1c-19.9 23-31.9 53-35.7 89.5c-.3 3.5 3.7 5.5 6.5 3.5c1.8-1.4 4.1-3.4 6.6-5.6c0 0 0 0 0 0c9.2-8.1 22.3-19.5 31.7-19.5c2.3 2 7.6 7.8 19.9 25z" />
    </Icon>
);

export default UserVisor;