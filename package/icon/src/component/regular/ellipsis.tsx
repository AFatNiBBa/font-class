
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis?s=regular ellipsis}
 * @preview ![ellipsis](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgMjU2QzQwMCAyODIuNSA0MjEuNSAzMDQgNDQ4IDMwNFM0OTYgMjgyLjUgNDk2IDI1NlM0NzQuNSAyMDggNDQ4IDIwOFM0MDAgMjI5LjUgNDAwIDI1NlpNMTEyIDI1NkMxMTIgMjI5LjUgOTAuNSAyMDggNjQgMjA4UzE2IDIyOS41IDE2IDI1NlMzNy41IDMwNCA2NCAzMDRTMTEyIDI4Mi41IDExMiAyNTZaTTMwNCAyNTZDMzA0IDIyOS41IDI4Mi41IDIwOCAyNTYgMjA4UzIwOCAyMjkuNSAyMDggMjU2UzIyOS41IDMwNCAyNTYgMzA0UzMwNCAyODIuNSAzMDQgMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Ellipsis: typeof Icon = x => (
    <Icon {...x}>
        <path d="M400 256C400 282.5 421.5 304 448 304S496 282.5 496 256S474.5 208 448 208S400 229.5 400 256ZM112 256C112 229.5 90.5 208 64 208S16 229.5 16 256S37.5 304 64 304S112 282.5 112 256ZM304 256C304 229.5 282.5 208 256 208S208 229.5 208 256S229.5 304 256 304S304 282.5 304 256Z" />
    </Icon>
);

export default Ellipsis;