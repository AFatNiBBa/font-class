
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass-end` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-end?s=thin hourglass-end}
 * @preview ![hourglass-end](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA4QzAgMy42IDMuNiAwIDggMEwzNzYgMGM0LjQgMCA4IDMuNiA4IDhzLTMuNiA4LTggOGwtMjQgMCAwIDU1LjJjMCA0OC4zLTIzIDkzLjctNjEuOCAxMjIuNEwyMDUuNSAyNTZsODQuNyA2Mi40QzMyOSAzNDcgMzUyIDM5Mi41IDM1MiA0NDAuOGwwIDU1LjIgMjQgMGM0LjQgMCA4IDMuNiA4IDhzLTMuNiA4LTggOEw4IDUxMmMtNC40IDAtOC0zLjYtOC04czMuNi04IDgtOGwyNCAwIDAtNTUuMmMwLTQ4LjMgMjMtOTMuNyA2MS44LTEyMi40TDE3OC41IDI1NiA5My44IDE5My42QzU1IDE2NSAzMiAxMTkuNSAzMiA3MS4yTDMyIDE2IDggMTZjLTQuNCAwLTgtMy42LTgtOHptNDggOGwwIDU1LjJjMCA0My4yIDIwLjUgODMuOSA1NS4zIDEwOS41TDE5MiAyNDYuMWw4OC43LTY1LjNDMzE1LjUgMTU1LjEgMzM2IDExNC40IDMzNiA3MS4yTDMzNiAxNiA0OCAxNnptNTUuMyAzMTUuM0M5NSAzMzcuNCA4Ny41IDM0NC40IDgxIDM1MmwuMiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjQgMCAuNCAwIC40IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC41IDAgLjUgMCAuNSAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuNiAwIC42IDAgLjYgMCAuMiAwYy02LjYtNy42LTE0LjEtMTQuNi0yMi40LTIwLjdMMTkyIDI2NS45bC04OC43IDY1LjN6TTY5LjEgMzY4QzU1LjUgMzg5LjUgNDggNDE0LjcgNDggNDQwLjhMNDggNDk2bDI4OCAwIDAtNTUuMmMwLTI2LjEtNy41LTUxLjMtMjEuMS03Mi44bC0uMSAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNCAwLS40IDAtLjQgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjUgMC0uNSAwLS41IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjYgMC0uNiAwLS42IDAtLjEgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HourglassEnd: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 8C0 3.6 3.6 0 8 0L376 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-24 0 0 55.2c0 48.3-23 93.7-61.8 122.4L205.5 256l84.7 62.4C329 347 352 392.5 352 440.8l0 55.2 24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 512c-4.4 0-8-3.6-8-8s3.6-8 8-8l24 0 0-55.2c0-48.3 23-93.7 61.8-122.4L178.5 256 93.8 193.6C55 165 32 119.5 32 71.2L32 16 8 16c-4.4 0-8-3.6-8-8zm48 8l0 55.2c0 43.2 20.5 83.9 55.3 109.5L192 246.1l88.7-65.3C315.5 155.1 336 114.4 336 71.2L336 16 48 16zm55.3 315.3C95 337.4 87.5 344.4 81 352l.2 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .4 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .5 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .6 0 .2 0c-6.6-7.6-14.1-14.6-22.4-20.7L192 265.9l-88.7 65.3zM69.1 368C55.5 389.5 48 414.7 48 440.8L48 496l288 0 0-55.2c0-26.1-7.5-51.3-21.1-72.8l-.1 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.4 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.5 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.6 0-.1 0z" />
    </Icon>
);

export default HourglassEnd;