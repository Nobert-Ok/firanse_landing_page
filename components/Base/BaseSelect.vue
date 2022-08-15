<template>
    <div class="base-input">
        <label class="form__label" for="item" :class="{
            'form__label--focus': focusState == 'focus',
            'form__label--filled': focusState == 'blur' && reactiveValue, 'd-none': placeholder && focusState == 'blur' && !reactiveValue
        }">{{ label }}</label>
        <select id="item" v-model="reactiveValue" ref="inputField" @change="e => $emit('change', e)" @focus="onFocus"
            @blur="onBlur" class="form__select"
            :class="{ 'form__select--FT': focusState == 'focus' && reactiveValue, 'form__select--T': focusState == 'blur' && reactiveValue }">
            <template v-if="$slots.default">
                <option value="Select an option" disabled selected>Select an option</option>
                <slot />
            </template>
            <template v-else>
                <option value="Select an options" disabled selected>Select an option</option>
                <option :value="value" v-for="{ name, value } in optionsArr" :key="value">{{ name }}</option>
            </template>
        </select>
        <span class="form__select__icon" @click="$emit('iconClicked')">
            <v-icon size="20" :color="focusState == 'focus' ? '#FFA800' : '#aaa'">{{ focusState == 'focus' ?
                    'mdi-chevron-up' : 'mdi-chevron-down'
            }}</v-icon>
        </span>
        <span v-if="!reactiveValue && !!placeholder && focusState == 'blur'" class="form__select__placeholder">{{
                placeholder
        }}</span>
    </div>
</template>
<script>
export default {
    name: "BaseSelect",
    model: {
        prop: "value",
        event: "input-change",
    },
    data() {
        return {
            focusState: "blur",
            reactiveValue: this.value,
            interest: ['1', '2']
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
        optionsArr: {
            type: Array,
            default: () => []
        },
        value: {
            type: String,
        }
    },
    watch: {
        value(newVal) {
            this.reactiveValue = newVal;
        },
        reactiveValue(newVal) {
            if (this.isDisabled) {
                return;
            }
            this.onBlur()
            this.$emit("input-change", newVal);
        }
    },
    methods: {
        focus() {
            if (this.$refs?.inputField?.focus) {
                this.$refs.inputField.focus();
            }
        },
        onFocus(e) {
            // Emitted when you focus on the input.
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
    // $input-padding: 10px 32px 10px 16px;

    &__label {
        // line-height: 19px;
        font-size: $font-sm;
        position: absolute;
        top: 10px;
        left: 18px;
        z-index: 2;
        color: '#aaa';

        &--sm {
            font-size: $font-base;
        }

        &--inline {
            display: inline-block;
        }

        &--filled {
            font-size: $font-sm;
            z-index: 2;
            position: absolute;
            top: 5px;
            left: 18px;
            color: '#aaa';
        }

        &--focus {
            font-size: $font-sm;
            z-index: 2;
            position: absolute;
            top: 5px;
            left: 18px;
            color: $primary;
        }
    }

    &__select {
        display: block;
        width: 100%;
        // padding: 10px 16px 11px;
        padding: 18px 16px 2px;
        font-size: $font-base;
        line-height: 19px;
        color: inherit;
        font-family: inherit;
        background-color: transparent;
        background-image: none;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
        border: 1px solid rgb(226, 226, 226);
        border-radius: $border-radius;
        box-shadow: none;
        transition: all 0.3s ease-in-out;
        min-height: 56px;
        outline: none;
        white-space: nowrap;
        box-sizing: border-box !important;

        // background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");

        &:focus,
        &:active {
            border-color: $primary;
            padding: 18px 16px 2px;
        }

        &[readonly] {
            background-color: $accent;
        }

        &--FT {
            border-width: 1px;
            border-radius: 10px;
            border-color: #FFA800;
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
            color: black;
            padding: 18px 16px 2px;
        }

        &__icon {
            position: absolute;
            top: 20px;
            right: 10px;
        }

        &__placeholder {
            position: absolute;
            left: 0px;
            top: 5px;
            margin-top: 1px;
            font-size: $font-base;
            padding: 10px 15px;
            color: rgb(201, 201, 201);
        }
    }
}
</style>