<template>
    <div>
        <div class="base-input" @click="openTime">
            <label class="form__label" :class="{
                'form__label--focus': focusState == 'focus',
                'form__label--filled': focusState == 'blur' && reactiveValue
            }">{{ label }}</label>
            <input v-bind="$attrs" v-model="reactiveValue" ref="inputField" @input="e => $emit('input', e)"
                @change="e => $emit('change', e)" @focus="onFocus" @blur="onBlur" type="time" class="form__input"
                :placeholder="placeholder"
                :class="{ 'form__input--FT': focusState == 'focus' && reactiveValue, 'form__input--T': focusState == 'blur' && reactiveValue }">

            <!-- <span class="form__input__icon">
                <v-icon size="16" :color="focusState == 'focus' ? '#FFA800' : '#aaa'">mdi-clock-outline</v-icon>
            </span> -->
            <!-- <span v-if="!!placeholder" class="form__select__placeholder">{{
                    placeholder
            }}</span> -->
        </div>
        <!-- <input v-model="reactiveValue" id="timeInput" type="time" hidden /> -->
    </div>
</template>
<script>
export default {
    name: "BaseInput",
    model: {
        prop: "value",
        event: "input-change",
    },
    data() {
        return {
            // value: '',
            focusState: "blur",
            reactiveValue: this.value,
            timeDialog: false,
            time: null
        }
    },
    props: {
        placeholder: {
            type: String
        },
        label: {
            type: String,
            required: true
        },
        icon: {
            type: String
        },
        value: {
            type: [String, Number],
            default: undefined
        }
    },
    watch: {
        value(newVal) {
            this.reactiveValue = newVal;
        },
        reactiveValue(newVal) {
            if (this.isDisabled || this.isReadOnly) {
                return;
            }
            this.$emit("input-change", newVal);
        }
    },
    methods: {
        openTime() {
            // document.getElementById("timeInput").click();
        },
        addTime() {
            this.reactiveValue = this.time
            this.timeDialog = false
        },
        focus() {
            if (this.$refs?.inputField?.focus) {
                this.$refs.inputField.focus();
            }
        },
        onFocus(e) {
            // Emitted when you focus on the input.
            // document.getElementById("timeInput").click();
            this.focusState = "focus";
            this.$emit("focus", e);
        },

        onBlur(e) {
            // Emitted when you blur off the input.
            this.focusState = "blur";
            this.$emit("blur", e);
        },
    }
}
</script>
<style lang="scss">
.base-input {
    position: relative;
}

.form {
    &__label {
        // line-height: 19px;
        font-size: $font-sm;
        position: absolute;
        top: 6px;
        left: 18px;
        z-index: 2;
        color: #aaa;


        &--inline {
            display: inline-block;
        }

        &--filled {
            // font-size: 10px;
            z-index: 2;
            position: absolute;
            // top: 5px;
            // left: 18px;
            color: #aaa;
        }

        &--focus {
            // font-size: 10px;
            z-index: 2;
            position: absolute;
            // top: 5px;
            // left: 18px;
            color: $primary;
        }
    }

    &__input {
        display: block;
        padding: 30px 11px 11px 18px;
        font-size: $font-base;
        line-height: 19px;
        color: inherit;
        font-family: inherit;
        background-color: white;
        background-image: none;
        -webkit-appearance: none;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
        border: 1px solid rgb(226, 226, 226);
        min-width: 150px;
        border-radius: $border-radius;
        box-shadow: none;
        transition: all 0.3s ease-in-out;
        height: 56px;
        outline: none;
        white-space: nowrap;
        box-sizing: border-box !important;

        &:focus,
        &:active {
            border-color: $primary;
            // padding: 25px 16px 11px;
        }

        &[readonly] {
            background-color: $accent;
        }

        ::placeholder {
            color: #FFA800
        }

        ::-webkit-input-placeholder {
            /* Edge */
            color: #aaa;
        }

        :-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: #aaa;
        }

        &--FT {
            border-width: 1px;
            border-radius: 10px;
            border-color: #FFA800;
            // padding-bottom: 0;
            font-size: $font-base;
            background-color: white;
            color: black;
        }

        &--T {
            border-width: 1px;
            border-radius: 10px;
            border-color: rgb(226, 226, 226);
            font-size: $font-base;
            background-color: white;
            // padding: 10;
            color: black;
            // padding: 25px 16px 11px;
        }

        &__icon {
            position: absolute;
            top: 20px;
            right: 10px;
        }

    }

    &__placeholder {
        position: absolute;
        left: 0px;
        top: 5px;
        margin-top: 1px;
        font-size: $font-base;
        padding: 10px 15px;
        color: rgb(132, 132, 132)
    }

}

// input[type="time"]::-webkit-calendar-picker-indicator {
//     background: none;
//     display: none;
// }
</style>