#following a Replit tutorial for the tennis ball juggling game 
#run this code on Replit in their pygame environment (suitable for some of the commands used in this project) 


import pygame
import random 

WIDTH = 500
HEIGHT = 300
BACKGROUND = (0, 0, 0)

class Ball:
    def __init__(self):
        self.alive = True
        self.image = pygame.image.load("sprite.png") #bringing           the tennis ball into light
        self.speed = [random.uniform(-4,4), 2]
        self.rect = self.image.get_rect()

    def update(self): #initially updated to be able to move
        if self.rect.top < 0: #ensure that there is a top (ball          does not drift off)
            self.speed[1] = -self.speed[1] #adding different                 levels of speed 
            self.speed[0] = random.uniform(-4, 4)
        elif self.rect.left < 0 or self.rect.right > WIDTH:
            self.speed[0] = -self.speed[0]
        elif self.rect.bottom > HEIGHT:
            self.alive = False
        self.move()

    def move(self):
        self.rect = self.rect.move(self.speed)

def main(): #defining a function called main 
    clock = pygame.time.Clock() #establishing a clock to ensure     time calcualtion between calls to redraw, keep game     
    pygame.init() #initializing pygame 
    screen = pygame.display.set_mode((WIDTH, HEIGHT))

    ball1 = Ball()
    ball2 = Ball()
    ball3 = Ball()

    balls = [ball1, ball2, ball3]

    while True:
        for event in pygame.event.get():
            if event.type == pygame.MOUSEBUTTONDOWN:
                for ball in balls:
                    if ball.rect.collidepoint(pygame.mouse.get_pos()):
                        ball.speed[0] = random.randrange(-4, 4)
                        ball.speed[1] = -2
                        break
        screen.fill(BACKGROUND)
        for i, ball in enumerate(balls):
            if ball.alive:
                screen.blit(ball.image, ball.rect)
                ball.update()
                if not ball.alive:
                    del balls[i]
        pygame.display.flip()
        clock.tick(60)
    pygame.init() #initializing pygame 
    screen = pygame.display.set_mode((WIDTH, HEIGHT)) 
    ball = Ball()
    ball1 = Ball()
    ball2 = Ball()
    ball3 = Ball()
    balls = [ball1, ball2, ball3]
    while True: #loop to create the whole redrawing aspect for stimulating moving objects 
        for event in pygame.event.get():
            if event.type == pygame.MOUSEBUTTONDOWN:
                if ball.rect.collidepoint(pygame.mouse.get_pos()):
                    ball.speed[0] = random.uniform(-4, 4)
                    ball.speed[1] = -2
        screen.fill(BACKGROUND)
        for i, ball in enumerate(balls):
            if ball.alive:
                screen.blit(ball.image, ball.rect)
                ball.update()
                if not ball.alive:
                    del balls[i]
        pygame.display.flip()
        clock.tick(60) #redraw screen 60 times per second

if __name__ == "__main__":
    main()
