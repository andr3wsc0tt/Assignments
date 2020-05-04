<footer>
    <h2>Footer</h2>
    <p>
        &copy;
        <?php echo date( 'Y'); ?>
        TECHCareers by Manpower
        </p>
        <?php if (function_exists ('output_hello_world') ): ?>
        <aside>
            <?php output_hello_world(); ?>
        </aside>
        </footer>
        <?php wp_footer(); ?>
    <?php endif;?>
    </body>
    </html>
