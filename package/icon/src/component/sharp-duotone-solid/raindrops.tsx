
import { Icon, generic } from "../../index";

/**
 * A component that renders the `raindrops` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/raindrops?s=sharp-duotone-solid raindrops}
 * @preview ![raindrops](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM0OS4yTDAgMzUyYzAgMzUuMyAyOC43IDY0IDY0IDY0czY0LTI4LjcgNjQtNjRsMC0yLjhjMC0xMi4xLTMuMy0yNC05LjUtMzQuNEw2NCAyMjQgOS41IDMxNC44QzMuMyAzMjUuMiAwIDMzNy4xIDAgMzQ5LjJ6bTk2LTE5MmwwIDIuOGMwIDM1LjMgMjguNyA2NCA2NCA2NHM2NC0yOC43IDY0LTY0bDAtMi44YzAtMTIuMS0zLjMtMjQtOS41LTM0LjRMMTYwIDMybC01NC41IDkwLjhjLTYuMiAxMC40LTkuNSAyMi4zLTkuNSAzNC40eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjExLjcgMjkzLjVMMzIwIDEyOCA0MjguMyAyOTMuNWMxMi44IDE5LjYgMTkuNyA0Mi42IDE5LjcgNjZDNDQ4IDQyNiAzOTQgNDgwIDMyNy41IDQ4MGgtMTVDMjQ2IDQ4MCAxOTIgNDI2IDE5MiAzNTkuNWMwLTIzLjQgNi44LTQ2LjQgMTkuNy02NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Raindrops: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 349.2L0 352c0 35.3 28.7 64 64 64s64-28.7 64-64l0-2.8c0-12.1-3.3-24-9.5-34.4L64 224 9.5 314.8C3.3 325.2 0 337.1 0 349.2zm96-192l0 2.8c0 35.3 28.7 64 64 64s64-28.7 64-64l0-2.8c0-12.1-3.3-24-9.5-34.4L160 32l-54.5 90.8c-6.2 10.4-9.5 22.3-9.5 34.4z" />
            <path d="M211.7 293.5L320 128 428.3 293.5c12.8 19.6 19.7 42.6 19.7 66C448 426 394 480 327.5 480h-15C246 480 192 426 192 359.5c0-23.4 6.8-46.4 19.7-66z" />
    </Icon>
);

export default Raindrops;