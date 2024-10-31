
import { Icon, generic } from "../../index";

/**
 * A component that renders the `users-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-medical?s=sharp-duotone-solid users-medical}
 * @preview ![users-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/users-medical.svg)
 */
const UsersMedical: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 320l235.3 0c-26.6-23.5-43.3-57.8-43.3-96c0-11 1.4-21.8 4-32L48 192 0 320zM64 80a80 80 0 1 0 160 0A80 80 0 1 0 64 80zm64 432l352 0 0-32-32 0-32 0 0-32 0-64 0-32-240 0L128 512zm96-288a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zm180.7 96l75.3 0 0-32 32 0 64 0 32 0 0 32 32 0L592 192l-148 0c2.6 10.2 4 21 4 32c0 38.2-16.8 72.5-43.3 96zM432 80a80 80 0 1 0 160 0A80 80 0 1 0 432 80z" />
        <path d="M576 320l-64 0 0 64-64 0 0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64z" />
    </Icon>
);

export default UsersMedical;