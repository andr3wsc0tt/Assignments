<?php get_header(); ?>
<?php if (have_posts() ): ?>
    <?php while( have_posts() ): the_post(); ?>
        <article>
            <h2><?php the_title(); ?> </h2>
            <?php the_content(); ?>
        </article>
        <nav>
            <a href="<?php echo site_url(); ?>">Go Back</a>
        </nav>
    <?php endwhile;?>
<?php endif; ?>
<?php get_footer();