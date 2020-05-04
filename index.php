<?php get_header(); ?>

<?php if (have_posts() ) : ?>
    <ul>
    <?php while (have_posts()): ?>
        <?php the_post();?>
        <li>
            <h3><?php the_title(); ?></h3>
            <p>
            <?php the_excerpt(); ?>
            </p>
            <p>
            <a href="<?php the_permalink(); ?>">To Post</a>
            </li>
    <?php endwhile; ?>
    </ul>
<?php endif; ?>
<?php get_footer();