
import { Icon } from "../../index";

/**
 * A component that renders the `pedestal` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pedestal?s=solid pedestal}
 * @preview ![pedestal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTYgMEM2MC43IDAgMzIgMjguNyAzMiA2NGwwIDM1MiAzODQgMCAwLTM1MmMwLTM1LjMtMjguNy02NC02NC02NEw5NiAwem0yNCA2NGEyNCAyNCAwIDEgMSAwIDQ4IDI0IDI0IDAgMSAxIDAtNDh6TTMwNCA4OGEyNCAyNCAwIDEgMSA0OCAwIDI0IDI0IDAgMSAxIC00OCAwek0zMiA0NDhjLTE3LjcgMC0zMiAxNC4zLTMyIDMyczE0LjMgMzIgMzIgMzJsMzg0IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJMMzIgNDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Pedestal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 0C60.7 0 32 28.7 32 64l0 352 384 0 0-352c0-35.3-28.7-64-64-64L96 0zm24 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM304 88a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448z" />
    </Icon>
);

export default Pedestal;