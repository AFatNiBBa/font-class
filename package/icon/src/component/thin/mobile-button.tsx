
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-button` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-button?s=thin mobile-button}
 * @preview ![mobile-button](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTYgMTZDNjkuNSAxNiA0OCAzNy41IDQ4IDY0bDAgMzg0YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4bDE5MiAwYzI2LjUgMCA0OC0yMS41IDQ4LTQ4bDAtMzg0YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4TDk2IDE2ek0zMiA2NEMzMiAyOC43IDYwLjcgMCA5NiAwTDI4OCAwYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMzg0YzAgMzUuMy0yOC43IDY0LTY0IDY0TDk2IDUxMmMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMzIgNjR6TTE3NiA0MzJhMTYgMTYgMCAxIDAgMzIgMCAxNiAxNiAwIDEgMCAtMzIgMHptMTYgMzJhMzIgMzIgMCAxIDEgMC02NCAzMiAzMiAwIDEgMSAwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MobileButton: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M96 16C69.5 16 48 37.5 48 64l0 384c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-384c0-26.5-21.5-48-48-48L96 16zM32 64C32 28.7 60.7 0 96 0L288 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64L32 64zM176 432a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64z" />
    </Icon>
);

export default MobileButton;