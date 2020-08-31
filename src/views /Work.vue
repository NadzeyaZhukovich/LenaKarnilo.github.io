<template>
    <div>
        <h2>{{$t("test")}}</h2>
        <LanguageSelector/>
    </div>

</template>

<script>
    import LanguageSelector from "../components/LanguageSelector";
    export default {
        name: 'Work',
        components: {LanguageSelector}
    }
</script>