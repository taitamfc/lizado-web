<?php
if (!defined('ABSPATH'))
    die('No direct access allowed');

switch ($type) {
    case 'tabs':
    case 'tabs_radio':
    default :
        $id = uniqid();
        ?>
        <input type="<?php esc_attr_e($type == 'tabs_radio' ? "radio" : "checkbox") ?>" <?php echo sanitize_textarea_field($checked ? "checked='checked'" : '') ?> name="woof_section_tabs" id="woof_tab_<?php esc_attr_e($key . "_" . $id); ?>">
        <label class="woof_section_tab_label" for="woof_tab_<?php esc_attr_e($key . "_" . $id) ?>" id="woof_<?php esc_attr_e($key . "_" . $id); ?>_content"><?php esc_html_e($title) ?><span>+</span></label>
        <div class="woof_section_tab" class="woof_<?php esc_attr_e($key) ?>_content"> 
        <?php
    }

